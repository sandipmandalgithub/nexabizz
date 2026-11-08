-- CreateTable
CREATE TABLE "blogs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "coverImage" TEXT,
    "category" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "author" TEXT NOT NULL DEFAULT 'NexaBizz Team',
    "readTime" INTEGER NOT NULL DEFAULT 5,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blogs_slug_key" ON "blogs"("slug");

-- CreateIndex
CREATE INDEX "blogs_published_idx" ON "blogs"("published");

-- CreateIndex
CREATE INDEX "blogs_featured_idx" ON "blogs"("featured");

-- CreateIndex
CREATE INDEX "blogs_category_idx" ON "blogs"("category");

-- CreateIndex
CREATE INDEX "blogs_publishedAt_idx" ON "blogs"("publishedAt");

-- CreateIndex
CREATE INDEX "blogs_sortOrder_idx" ON "blogs"("sortOrder");
