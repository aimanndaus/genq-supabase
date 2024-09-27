ALTER TABLE "challenges" RENAME COLUMN "question1" TO "assist question";--> statement-breakpoint
ALTER TABLE "challenges" ALTER COLUMN "assist question" SET DEFAULT 'Select the correct answer';