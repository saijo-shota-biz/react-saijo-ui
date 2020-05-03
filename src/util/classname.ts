const classname = (classname: string, active: boolean = true) => {
  return active ? classname : "";
};

const classnames = (args: ([string, boolean] | [string])[]) => {
  return args.map((arg) => classname(arg[0], arg[1])).join(" ");
};

export default classnames;
