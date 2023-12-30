import { EmailService } from "src/services/email/email.service";
import { SendFormDataType } from "src/types/email.types";

const formElement = document.querySelector<HTMLFormElement>("#form");

formElement?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formElement);

  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email) {
    return;
  }

  const service = new EmailService();

  service.send(formData).then(() => {
    formElement.reset();
  });
});
