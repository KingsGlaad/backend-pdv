-- CreateTable
CREATE TABLE "Config" (
    "id" TEXT NOT NULL,
    "appName" TEXT NOT NULL DEFAULT 'PDV App',
    "logoUrl" TEXT,
    "theme" TEXT NOT NULL DEFAULT 'system',
    "currency" TEXT NOT NULL DEFAULT 'BRL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Config_pkey" PRIMARY KEY ("id")
);
