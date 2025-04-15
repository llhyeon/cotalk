export default function inputReg(type: string, userInput: string) {
  switch (type.toLowerCase()) {
    // nickname 검사 : 8글자 이상의 영문숫자 조합
    case 'nickname':
      const idTest = /^[a-zA-Z0-9]{8,}$/;
      return idTest.test(userInput);
    // email 검사 : 이메일 형식으로
    case 'email':
      const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailTest.test(userInput);
    // pw 검사 : 8글자 이상의 영문숫자특수문자 조합
    case 'password':
      const passwordTest =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[\]{};:'",.<>/?\\|`~])[a-zA-Z\d!@#$%^&*()\-_=+[\]{};:'",.<>/?\\|`~]{8,}$/;
      return passwordTest.test(userInput);
    default:
      throw new Error('올바른 타입 형식이 아닙니다.');
  }
}
