import { useEffect, useState } from "react";

export default function Program() {
    const [prog_name,setProgName]=useState('');
    const [prog_desc, setProgDesc]=useState('');
    const [prog_link, setProgLink]=useState('');
    const [idCategory, setProgCatId]=useState('');
    const [idDeveloper, setProgDevId]=useState('');
    const [programs, setPrograms]=useState([]);

    const handleClick=(e)=>{
        e.preventDefault();
        const program ={prog_name,prog_desc,prog_link,idCategory,idDeveloper};
        console.log(program);
        fetch("http://localhost:8080/program/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(program)
        }).then(()=>{
            console.log("New program");
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/program/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setPrograms(result);
        }
    )
    },[])

  return (
    <div>
    <h1>Add Program</h1>
    <form>
        <input placeholder="Program name" value={prog_name} onChange={(e)=>setProgName(e.target.value)} />
        <textarea placeholder="Program description" value={prog_desc} onChange={(e) => setProgDesc(e.target.value)} />
        <input placeholder="Program link" value={prog_link} onChange={(e) => setProgLink(e.target.value)} />
        <input placeholder="Program catid" value={idCategory} onChange={(e) => setProgCatId(e.target.value)} />
        <input placeholder="Program devid" value={idDeveloper} onChange={(e) => setProgDevId(e.target.value)} />
        <br/>
        <button onClick={handleClick}>Submit</button>
    </form>
    <div className="renderPrograms">
        {programs.map(program=>(
            <div key={program.id_prog}>
                <b>
                    Name:{program.prog_name}
                </b>
                <br/>
                <b>
                    Description:{program.prog_desc}
                </b>
                <br/>
                <b>
                    Link:{program.prog_link}
                </b>
                <br/>
            </div>

        ))}
    </div>
    </div>
    
  );
}
