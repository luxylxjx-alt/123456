const form = document.querySelector("#inquiryForm");
const message = document.querySelector("#formMessage");

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "已收到需求。请补充用途、颜色、用量和交期，瑞元会尽快给出材料建议和报价沟通。";
    form.reset();
  });
}
