import { ApiResponse, User, UpdateUserRequest } from "@/lib/types";
import { mockUser } from "../constants/mockedData";

const userService = {
  getUserProfile: async () => {
    const response: ApiResponse<User> = {
      data: mockUser,
      success: true,
      message: "Usuario obtenido correctamente",
    };

    return response.data;
  },

  updateUserProfile: async (userData: UpdateUserRequest) => {
    const response: ApiResponse<User> = {
      data: mockUser,
      success: true,
      message: "Usuario obtenido correctamente",
    };

    return response.data;
  },
};

export default userService;
