import Notiflix from 'notiflix';

export const successNotify = (message: string) => {
  Notiflix.Notify.success(message);
};

export const failureNotify = (message: string) => {
  Notiflix.Notify.failure(message);
};

export const warningNotify = (message: string) => {
  Notiflix.Notify.warning(message);
};
export const infoNotify = (message: string) => {
  Notiflix.Notify.info(message);
};

export const confirmationNotify = (
  title: string,
  question: string,
  defaultAnswer = '',
  okButtonText: string,
  cancelButtonText: string,
  okCB: () => void,
  cancelCB: () => void
) => {
  Notiflix.Confirm.prompt(
    title,
    question,
    defaultAnswer,
    okButtonText,
    cancelButtonText,
    function okCb(clientAnswer) {
        okCB()
    },
    function cancelCb(clientAnswer) {
        cancelCB()
    }
  );
};
