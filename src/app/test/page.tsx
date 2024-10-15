export default function Page() {
  const exec = require("child_process").exec;

  exec(
    'runas /user:Administrator "shutdown -s -t 30"',
    (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.error(`exec error: ${error}`);
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );

  exec("shutdown -s -t 30", (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.error(`exec error: ${error}`);
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

  return <div />;
}
