interface IerrorMsg {
  msg: string;
}

const ErrorMsg = ({ msg }: IerrorMsg) =>
  msg ? <span className="block text-red-700 text-sm">{msg}</span> : null;

export default ErrorMsg;
