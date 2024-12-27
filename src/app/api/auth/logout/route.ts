import authApiRequest from "@/apiRequests/auth.api";
import { HttpError } from "@/lib/http";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const res = await request.json();
  console.log("res la gi", res);
  const force = res.force as boolean | undefined;
  if (force) {
    console.log("vào trong force");
    return Response.json(
      {
        message: "Buộc đăng xuất thành công",
      },
      {
        status: 200,
        headers: {
          //xóa cookie session token
          "Set-Cookie": "sessionToken=; Path=/; HttpOnly; Max-Age=0",
        },
      }
    );
  }

  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("sessionToken");
  if (!sessionToken) {
    return Response.json(
      { message: "Không nhận được token" },
      {
        status: 400,
      }
    );
  }

  try {
    const result = await authApiRequest.logoutFromNextServerToServer(
      sessionToken.value
    );
    return Response.json(result.payload, {
      status: 200,
      headers: {
        "Set-Cookie": "sessionToken=; Path=/; HttpOnly; Max-Age=0",
      },
    });
  } catch (e) {
    if (e instanceof HttpError) {
      console.log("vào trong lỗi http error");
      return Response.json(e.payload, {
        status: e.status,
      });
    } else {
      console.log("vao trong lỗi không xác định");
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
