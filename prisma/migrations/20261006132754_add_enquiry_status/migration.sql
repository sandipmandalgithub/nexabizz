-- CreateEnum
CREATE TYPE "EnquiryStatus" AS ENUM ('NEW', 'CONTACTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- AlterTable
ALTER TABLE "contact_enquiries" ADD COLUMN     "status" "EnquiryStatus" NOT NULL DEFAULT 'NEW';

-- CreateIndex
CREATE INDEX "contact_enquiries_status_idx" ON "contact_enquiries"("status");
