import { useEffect, useState } from "react";
import "../App.css";

export default function Program() {
    const [prog_name,setProgName]=useState('');
    const [prog_desc, setProgDesc]=useState('');
    const [prog_link, setProgLink]=useState('');
    const [idCategory, setProgCatId]=useState('');
    const [idDeveloper, setProgDevId]=useState('');
    const [programs, setPrograms]=useState([]);
    const [sortByCategory, setSortByCategory]=useState('');
    const [sortByDeveloper, setSortByDeveloper]=useState('');
    const [filteredPrograms, setFilteredPrograms] = useState([]);

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
            console.log(result);
            setPrograms(result);
        }
    )
    },[]);



    const handleFilter = (e) => {
        e.preventDefault();
        let filtered = programs;
        if (sortByCategory !== '') {
            filtered = filtered.filter(program => program.category.toLowerCase().includes(sortByCategory.toLowerCase()));
        }
        if (sortByDeveloper !== '') {
            filtered = filtered.filter(program => program.developer.toLowerCase().includes(sortByDeveloper.toLowerCase()));
        }
        setFilteredPrograms(filtered);
    };

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
    <h2>Find by category</h2>
    <form>
        <input type="text" placeholder="Category name..." value={sortByCategory} onChange={(e) => setSortByCategory(e.target.value)} />
        <button onClick={handleFilter}>Find!</button>
    </form>
    <h2>Find by developer</h2>
    <form>
        <input type="text" placeholder="Developer name..." value={sortByDeveloper} onChange={(e)=> setSortByDeveloper(e.target.value)} />
        <button onClick={handleClick}>Find!</button>
    </form>
    <br/>
    <div className="renderPrograms">
    <table>
    <thead>
        <tr>
            <th>№</th>
            <th>Program Name</th>
            <th>Program Desc</th>
            <th>Program Link</th>
            <th>Category ID</th>
            <th>Developer ID</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {programs.map(program=>(
            <tr key={program.id_prog}>
                <td>{program.id_prog}</td>
                <td>{program.prog_name}</td>
                <td>{program.prog_desc}</td>
                <td><a href={"https://"+program.prog_link}>{program.prog_link}</a></td>
                <td>{program.idCategory}</td>
                <td>{program.idDeveloper}</td>
                <td><a href="" onClick={(e)=>{
                    e.preventDefault();
                    fetch("http://localhost:8080/program/delete/" + program.id_prog,{
                        method: 'DELETE',
                        headers:{'Content-Type':'application/json'}
                    })
                }}>Delete</a><br/><a href="">Put</a></td>
            </tr>
        ))}
    </tbody>
</table>
    </div>
    </div>
    
  );
}
