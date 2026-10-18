// =============================================================
// TIPE DASAR
// =============================================================

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";
export type CareerPath =
  | "Web Developer"
  | "Data Scientist"
  | "Cybersecurity"
  | "Mobile Developer"
  | "DevOps Engineer"
  | "UI/UX Designer";
export type BadgeType =
  | "first_assessment"
  | "roadmap_started"
  | "halfway_there"
  | "completed_roadmap"
  | "perfect_score";

// =============================================================
// CLASS: Skill
// =============================================================
export class Skill {
  name: string;
  level: SkillLevel;
  percentage: number; // 0-100

  constructor(name: string, level: SkillLevel, percentage: number) {
    this.name = name;
    this.level = level;
    this.percentage = Math.min(100, Math.max(0, percentage));
  }

  getLabel(): string {
    return `${this.name} (${this.level} — ${this.percentage}%)`;
  }
}

// =============================================================
// CLASS: Badge
// =============================================================
export class Badge {
  id: BadgeType;
  title: string;
  description: string;
  icon: string;
  earnedAt: Date;

  constructor(id: BadgeType, title: string, description: string, icon: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.earnedAt = new Date();
  }
}

// =============================================================
// CLASS: RoadmapStep
// =============================================================
export class RoadmapStep {
  id: number;
  title: string;
  description: string;
  resources: string[];
  isCompleted: boolean;
  estimatedDays: number;

  constructor(
    id: number,
    title: string,
    description: string,
    resources: string[],
    estimatedDays: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.resources = resources;
    this.isCompleted = false;
    this.estimatedDays = estimatedDays;
  }

  complete(): void {
    this.isCompleted = true;
  }

  getEstimatedWeeks(): string {
    const weeks = Math.ceil(this.estimatedDays / 7);
    return `~${weeks} minggu`;
  }
}

// =============================================================
// CLASS: Roadmap
// =============================================================
export class Roadmap {
  careerPath: CareerPath;
  steps: RoadmapStep[];
  createdAt: Date;

  constructor(careerPath: CareerPath, steps: RoadmapStep[]) {
    this.careerPath = careerPath;
    this.steps = steps;
    this.createdAt = new Date();
  }

  getCompletionPercentage(): number {
    if (this.steps.length === 0) return 0;
    const done = this.steps.filter((s) => s.isCompleted).length;
    return Math.round((done / this.steps.length) * 100);
  }

  getCompletedSteps(): RoadmapStep[] {
    return this.steps.filter((s) => s.isCompleted);
  }

  getTotalEstimatedDays(): number {
    return this.steps.reduce((sum, s) => sum + s.estimatedDays, 0);
  }
}

// =============================================================
// CLASS: Question (untuk Assessment)
// =============================================================
export class Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  topic: string;
  difficulty: SkillLevel;

  constructor(
    id: number,
    text: string,
    options: string[],
    correctIndex: number,
    topic: string,
    difficulty: SkillLevel
  ) {
    this.id = id;
    this.text = text;
    this.options = options;
    this.correctIndex = correctIndex;
    this.topic = topic;
    this.difficulty = difficulty;
  }

  checkAnswer(selectedIndex: number): boolean {
    return selectedIndex === this.correctIndex;
  }
}

// =============================================================
// CLASS: Assessment
// =============================================================
export class Assessment {
  id: string;
  title: string;
  questions: Question[];
  userAnswers: (number | null)[];
  startedAt: Date;
  completedAt: Date | null;

  constructor(id: string, title: string, questions: Question[]) {
    this.id = id;
    this.title = title;
    this.questions = questions;
    this.userAnswers = new Array(questions.length).fill(null);
    this.startedAt = new Date();
    this.completedAt = null;
  }

  answerQuestion(questionIndex: number, answerIndex: number): void {
    if (questionIndex >= 0 && questionIndex < this.userAnswers.length) {
      this.userAnswers[questionIndex] = answerIndex;
    }
  }

  submit(): void {
    this.completedAt = new Date();
  }

  getScore(): number {
    let correct = 0;
    this.questions.forEach((q, i) => {
      if (this.userAnswers[i] !== null && q.checkAnswer(this.userAnswers[i]!)) {
        correct++;
      }
    });
    return correct;
  }

  getScorePercentage(): number {
    if (this.questions.length === 0) return 0;
    return Math.round((this.getScore() / this.questions.length) * 100);
  }

  getRecommendedLevel(): SkillLevel {
    const pct = this.getScorePercentage();
    if (pct >= 75) return "Advanced";
    if (pct >= 40) return "Intermediate";
    return "Beginner";
  }

  isCompleted(): boolean {
    return this.completedAt !== null;
  }
}

// =============================================================
// CLASS: Progress (tracker progress user)
// =============================================================
export class Progress {
  xp: number;
  level: number;
  badges: Badge[];
  completedAssessments: string[]; // assessment IDs
  roadmapProgress: Map<CareerPath, number>; // CareerPath -> % selesai

  constructor() {
    this.xp = 0;
    this.level = 1;
    this.badges = [];
    this.completedAssessments = [];
    this.roadmapProgress = new Map();
  }

  addXP(amount: number): void {
    this.xp += amount;
    this.level = Math.floor(this.xp / 100) + 1;
  }

  earnBadge(badge: Badge): void {
    const alreadyEarned = this.badges.some((b) => b.id === badge.id);
    if (!alreadyEarned) {
      this.badges.push(badge);
    }
  }

  updateRoadmapProgress(path: CareerPath, percentage: number): void {
    this.roadmapProgress.set(path, percentage);
  }

  getTotalBadges(): number {
    return this.badges.length;
  }
}

// =============================================================
// CLASS: User (base)
// =============================================================
export class User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  getDisplayName(): string {
    return this.name;
  }
}

// =============================================================
// CLASS: Learner extends User
// =============================================================
export class Learner extends User {
  skills: Skill[];
  progress: Progress;
  selectedCareerPath: CareerPath | null;
  currentRoadmap: Roadmap | null;
  assessmentHistory: Assessment[];

  constructor(id: string, name: string, email: string) {
    super(id, name, email);
    this.skills = [];
    this.progress = new Progress();
    this.selectedCareerPath = null;
    this.currentRoadmap = null;
    this.assessmentHistory = [];
  }

  selectCareerPath(path: CareerPath, roadmap: Roadmap): void {
    this.selectedCareerPath = path;
    this.currentRoadmap = roadmap;
    this.progress.addXP(10);
  }

  addSkill(skill: Skill): void {
    const existing = this.skills.find((s) => s.name === skill.name);
    if (!existing) {
      this.skills.push(skill);
    }
  }

  completeAssessment(assessment: Assessment): void {
    assessment.submit();
    this.assessmentHistory.push(assessment);
    const xpEarned = assessment.getScore() * 10;
    this.progress.addXP(xpEarned);

    // Beri badge kalau ini assessment pertama
    if (this.assessmentHistory.length === 1) {
      this.progress.earnBadge(
        new Badge(
          "first_assessment",
          "Pejuang Pertama",
          "Menyelesaikan assessment pertama!",
          "🎯"
        )
      );
    }

    // Beri badge kalau perfect score
    if (assessment.getScorePercentage() === 100) {
      this.progress.earnBadge(
        new Badge(
          "perfect_score",
          "Sempurna!",
          "Mendapat nilai 100% di assessment",
          "💯"
        )
      );
    }
  }

  completeRoadmapStep(stepId: number): void {
    if (!this.currentRoadmap) return;
    const step = this.currentRoadmap.steps.find((s) => s.id === stepId);
    if (step && !step.isCompleted) {
      step.complete();
      this.progress.addXP(20);

      const pct = this.currentRoadmap.getCompletionPercentage();
      if (this.selectedCareerPath) {
        this.progress.updateRoadmapProgress(this.selectedCareerPath, pct);
      }

      // Badge halfway
      if (pct >= 50) {
        this.progress.earnBadge(
          new Badge(
            "halfway_there",
            "Setengah Jalan!",
            "Menyelesaikan 50% roadmap",
            "🔥"
          )
        );
      }

      // Badge completed
      if (pct === 100) {
        this.progress.earnBadge(
          new Badge(
            "completed_roadmap",
            "Roadmap Master",
            "Menyelesaikan seluruh roadmap!",
            "🏆"
          )
        );
      }
    }
  }

  getSummary(): string {
    return `${this.name} | Level ${this.progress.level} | XP: ${this.progress.xp} | Badge: ${this.progress.getTotalBadges()}`;
  }
}
