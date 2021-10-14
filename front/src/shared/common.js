// 아이디 체크 함수
export const idCheck = (id) => {
  let reg = /^[a-zA-Z0-9]{2,10}$/;
  return reg.test(id);
};

export const pwdCheck = (password) => {
  let reg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,15}$/;
  return reg.test(password);
};

export const phoneNumberCheck = (phoneNumber) => {
  let reg = /^010-[0-9]{3,4}-[0-9]{4}/;
  return reg.test(phoneNumber);
};
