const { default: Link } = require("next/link");

function StudentInfo() 
{
    return(
        <main>
            <h1>Luis Munoz</h1>
            <Link href="https://github.com/LuisMunoz28/cprg306-assignments">Github Link</Link>
        </main>
    );
}

export default StudentInfo;