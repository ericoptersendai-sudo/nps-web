import { Award, Brain, Clock3, Flame, Medal, Sparkles, Star, Target, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Progress } from "../context/ProgressContext";

export type AwardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  unlocked: boolean;
};

export function getAwards(progress: Progress): AwardItem[] {
  const studiedSeconds = progress.timeStudiedSeconds ?? progress.timeStudiedMinutes * 60;
  const practicedSubjects = new Set(progress.subjectsPracticed);
  const bestScore = progress.bestScore ?? progress.averageScore;

  return [
    {
      title: "First Test",
      description: "Complete one full test.",
      icon: Trophy,
      unlocked: progress.testsCompleted >= 1
    },
    {
      title: "Test Streak",
      description: "Complete three tests.",
      icon: Medal,
      unlocked: progress.testsCompleted >= 3
    },
    {
      title: "Exam Veteran",
      description: "Complete ten tests.",
      icon: Award,
      unlocked: progress.testsCompleted >= 10
    },
    {
      title: "Strong Score",
      description: "Score 80% or higher on a test.",
      icon: Target,
      unlocked: bestScore >= 80
    },
    {
      title: "Proficiency Star",
      description: "Score 90% or higher on a test.",
      icon: Star,
      unlocked: bestScore >= 90
    },
    {
      title: "Perfect Test",
      description: "Score 100% on a test.",
      icon: Sparkles,
      unlocked: bestScore >= 100
    },
    {
      title: "Study Starter",
      description: "Study actively for five minutes.",
      icon: Clock3,
      unlocked: studiedSeconds >= 300
    },
    {
      title: "Focus Builder",
      description: "Study actively for thirty minutes.",
      icon: Flame,
      unlocked: studiedSeconds >= 1800
    },
    {
      title: "Two-Subject Scholar",
      description: "Practice both Math and ELA.",
      icon: Brain,
      unlocked: practicedSubjects.has("Mathematics") && practicedSubjects.has("English Language Arts")
    }
  ];
}
