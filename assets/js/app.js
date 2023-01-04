const notifications = document.querySelector(".notifications");
const buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
  timer: 5000,
  success: {
    icon: "bx bxs-check-circle",
    text: "Soccess: você escorregou na gala!",
  },

  error: {
    icon: "bx bxs-x-circle",
    text: "Error: você não escorregou na gala!?",
  },

  warning: {
    icon: "bx bxs-error",
    text: "Warning: Talvez você escorregue na gala.",
  },

  info: {
    icon: "bx bxs-info-circle",
    text: "Info: Gala em frente, escorregue com cuidado.",
  },
};

const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 500);
};

const createToast = (id) => {
  const { icon, text } = toastDetails[id];
  const toast = document.createElement("li");
  toast.className = `toast ${id}`;
  toast.innerHTML = `<div class="column">
                        <i class='${icon}'></i>
                        <span>${text}</span>
                    </div>
                    <i class='bx bx-x' onclick="removeToast(this.parentElement)"></i>`;
  notifications.appendChild(toast);
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});
