async function takeTime() {
  await new Promise((resvole) => {
    setTimeout(resvole, 3000);
  });
}

export default async function About() {
  await takeTime();
  // throw new Error("this is manual error");
  return (
    <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-3xl">Exploring TaskVista: A Comprehensive Task Manager</h1>
          <p>
          TaskVista is a feature-rich task manager application designed to cater to the needs of both individuals and teams.
          <br></br> What sets it apart from the multitude of task management apps available today? Let's dive into its key features and explore how it can transform the way you manage your tasks.
          </p>
        </div>
    </div>
  );
}
