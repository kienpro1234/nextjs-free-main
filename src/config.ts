import { z } from "zod";

const configSchema = z.object({
  NEXT_PUBLIC_DOMAIN: z.string(),
});

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
});

if (!configProject.success) {
  console.error(configProject.error.issues);
  throw new Error("Các giá trị khai báo trong file .env không hợp lệ");
}

const envConfig = configProject.data;
export default envConfig;
