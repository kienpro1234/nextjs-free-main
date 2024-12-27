import authApiRequest from "@/apiRequests/auth.api";
import { HttpError } from "@/lib/http";

export async function POST(request: Request) {
  const res = await request.json();
  const sessionToken = res.sessionToken;
  // const expiresAt = res.expiresAt as string;
  if (!sessionToken) {
    return Response.json(
      { message: "Không nhận được token" },
      {
        status: 400,
      }
    );
  }

  try {
    const res = await authApiRequest.slideSessionFromNextServerToServer(
      sessionToken.value
    );
    const newExpiresDate = new Date(res.payload.data.expiresAt).toUTCString();
    return Response.json(
      { res },
      {
        status: 200,
        headers: {
          "Set-Cookie": `sessionToken=${sessionToken}; Path=/; HttpOnly; Expires=${newExpiresDate}; SameSite=Lax; Secure`,
        },
      }
    );
  } catch (e) {
    if (e instanceof HttpError) {
      return Response.json(e.payload, {
        status: e.status,
      });
    } else {
      return Response.json(
        {
          message: "Lỗi không xác định",
        },
        {
          status: 500,
        }
      );
    }
  }
}
