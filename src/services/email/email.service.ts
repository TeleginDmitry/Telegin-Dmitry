import { instance } from "src/api/api.interceptor";
import { SendFormDataType } from "src/types/email.types";

export class EmailService {
  async send(formData: FormData) {
    const response = await instance.post("send-email", formData);
    return response.data;
  }
}
