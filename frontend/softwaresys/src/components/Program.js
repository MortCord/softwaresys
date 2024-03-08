import { useEffect, useState } from "react";
import "../App.css";

export default function Program() {
    const [id_prog, setIdProg] = useState('');
    const [prog_name,setProgName]=useState('');
    const [prog_desc, setProgDesc]=useState('');
    const [prog_link, setProgLink]=useState('');
    const [idCategory, setProgCatId]=useState('');
    const [idDeveloper, setProgDevId]=useState('');
    const [programs, setPrograms]=useState([]);
    const [sortByCategory, setSortByCategory]=useState('');
    const [sortByDeveloper, setSortByDeveloper]=useState('');
    const [filteredPrograms, setFilteredPrograms] = useState([]);
    const [isPut, setIsPut] = useState(false);
    const [categories, setCategories] = useState([]);
    const [developers, setDevelopers] = useState([]);
    const [programDetails, setProgramDetails] = useState([]);
    const [sortByName, setSortByName] = useState('');
    const [devName, setDevName] = useState('');
    const [catName, setCatName] = useState('');

    useEffect(()=>{
        fetch("http://localhost:8080/program/getAll")
            .then(res=>res.json())
            .then((result)=>{
                console.log(result);
                setPrograms(result);
            })
            .catch(error => {
                console.error("Error fetching programs:", error);
            });

        fetch("http://localhost:8080/category/getAll")
            .then(res=>res.json())
            .then((result)=>{
                console.log("Categories")
                console.log(result);
                setCategories(result);
            })
            .catch(error => {
                console.error("Error fetching programs:", error);
            });

        fetch("http://localhost:8080/dev/getAll")
            .then(res=>res.json())
            .then((result)=>{
                console.log("dev")
                console.log(result);
                setDevelopers(result);
            })
            .catch(error => {
                console.error("Error fetching programs:", error);
            });
           
        fetch("http://localhost:8080/program/getDetails")
            .then(res=>res.json())
            .then((result)=>{
                console.log("details")
                console.log(result);
                setProgramDetails(result);
            })
            .catch(error => {
                console.error("Error fetching programs:", error);
            });
    },[]);
    

    const handleClick=(e)=>{
        e.preventDefault();
        console.log(isPut);
        if(isPut === true){

            var isCatName = false;
            var isDevName = false;
            var catId = 0;
            var devId = 0;
            for(const el of categories){
                if(catName === el.category_Name){
                    isCatName = true;
                    console.log("Category True");
                    break;
                }
            }

            if(isCatName === false){
                const category = {"category_Name":catName}
                console.log(category);
                fetch("http://localhost:8080/category/add",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(category)
                }).then(()=>{
                    console.log("New category");
                });
            }


            for(const el of developers){
                if(devName === el.developer_Name){
                    isDevName = true;
                    console.log("Developer True");
                    break;
                }
            }
            

            if(isDevName === false){
                const developer = {"developer_Name":devName}
                console.log(developer);
                fetch("http://localhost:8080/dev/add",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(developer)
                }).then(()=>{
                    console.log("New developer");
                });
            }

            fetch("http://localhost:8080/category/getAll")
            .then(res=>res.json())
            .then((result)=>{
                console.log("Categories")
                console.log(result);
                setCategories(result);
            })
            .catch(error => {
                console.error("Error fetching programs:", error);
            });

            for(const el of categories){
                if(catName === el.category_Name){
                    catId = el.id_cat;
                    console.log("Category Id " + catId);
                    break;
                }
            }

            fetch("http://localhost:8080/dev/getAll")
            .then(res=>res.json())
            .then((result)=>{
                console.log("dev")
                console.log(result);
                setDevelopers(result);
            })
            .catch(error => {
                console.error("Error fetching programs:", error);
            });
            for(const el of developers){
                if (devName === el.developer_Name){
                    devId = el.id_dev;
                    console.log("Developer Id " + devId);
                    break;
                }
            }
            console.log(catId);
            console.log(devId);


            const program ={id_prog,prog_name,prog_desc,prog_link,"idCategory":catId,"idDeveloper":devId};
            fetch("http://localhost:8080/program/update/" + id_prog,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(program)
            })
            .then(response => {
                if (response.ok) {
                    console.log('Program updated successfully');

                } else {
                    console.error('Failed to update program');

                }
            })
            .catch(error => {
                console.error('Error updating program:', error);

            });
            setIsPut(false)
        }else{
            var isCatName = false;
            var isDevName = false;
            var catId = 0;
            var devId = 0;
            for(const el of categories){
                if(catName === el.category_Name){
                    isCatName = true;
                    console.log("Category True");
                    break;
                }
            }

            if(isCatName === false){
                const category = {"category_Name":catName}
                console.log(category);
                fetch("http://localhost:8080/category/add",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(category)
                }).then(()=>{
                    console.log("New category");
                });
            }


            for(const el of developers){
                if(devName === el.developer_Name){
                    isDevName = true;
                    console.log("Developer True");
                    break;
                }
            }
            

            if(isDevName === false){
                const developer = {"developer_Name":devName}
                console.log(developer);
                fetch("http://localhost:8080/dev/add",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(developer)
                }).then(()=>{
                    console.log("New developer");
                });
            }

            fetch("http://localhost:8080/category/getAll")
            .then(res=>res.json())
            .then((result)=>{
                console.log("Categories")
                console.log(result);
                setCategories(result);
            })
            .catch(error => {
                console.error("Error fetching programs:", error);
            });

            for(const el of categories){
                if(catName === el.category_Name){
                    catId = el.id_cat;
                    console.log("Category Id " + catId);
                    break;
                }
            }

            fetch("http://localhost:8080/dev/getAll")
            .then(res=>res.json())
            .then((result)=>{
                console.log("dev")
                console.log(result);
                setDevelopers(result);
            })
            .catch(error => {
                console.error("Error fetching programs:", error);
            });
            for(const el of developers){
                if (devName === el.developer_Name){
                    devId = el.id_dev;
                    console.log("Developer Id " + devId);
                    break;
                }
            }
            console.log(catId);
            console.log(devId);

            const program ={prog_name,prog_desc,prog_link,"idCategory":catId,"idDeveloper":devId};
            console.log(program);
            fetch("http://localhost:8080/program/add",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(program)
            }).then(()=>{
                console.log("New program");
            })
        }


    }

    useEffect(() => {
        let filtered = programDetails;
        if (sortByCategory !== '') {
            filtered = filtered.filter(program => {
                console.log("Program Category:", program.categoryName);
                const category = program.categoryName ? program.categoryName.toString().toLowerCase() : ''; 
                return category.includes(sortByCategory.toLowerCase());
            });
        }
        if (sortByDeveloper !== '') {
            filtered = filtered.filter(program => {
                console.log("Program Developer:", program.developerName);
                const developer = program.developerName ? program.developerName.toString().toLowerCase() : ''; 
                return developer.includes(sortByDeveloper.toLowerCase());
            });
        }
        if (sortByName !== '') {
            filtered = filtered.filter(program => {
                console.log("Program Name:", program.programName);
                const name = program.programName ? program.programName.toString().toLowerCase() : ''; 
                return name.includes(sortByName.toLowerCase());
            });
        }
        setFilteredPrograms(filtered);
    }, [programs, sortByCategory, sortByDeveloper, sortByName]);
    

    
    
    
    

  return (
    <div>
    <h1>Add Program</h1>
    <div className="forForm">
    <form id="form">
        <input placeholder="Program name" value={prog_name} onChange={(e)=>setProgName(e.target.value)} />
        <textarea placeholder="Program description" value={prog_desc} onChange={(e) => setProgDesc(e.target.value)} />
        <input placeholder="Program link" value={prog_link} onChange={(e) => setProgLink(e.target.value)} />
        <input placeholder="Program category name" value={catName} onChange={(e) => setCatName(e.target.value)} />
        <input placeholder="Program developer name" value={devName} onChange={(e) => setDevName(e.target.value)} />
        <br/>
        <button onClick={handleClick}>Submit</button>
    </form>
    </div>
    <h2>Find by name</h2>
    <form>
        <input type="text" placeholder="Program name..." value={sortByName} onChange={(e)=> setSortByName(e.target.value)} />
    </form>
    <h2>Find by category</h2>
    <form>
        <input type="text" placeholder="Category name..." value={sortByCategory} onChange={(e) => setSortByCategory(e.target.value)} />
    </form>
    <h2>Find by developer</h2>
    <form>
        <input type="text" placeholder="Developer name..." value={sortByDeveloper} onChange={(e)=> setSortByDeveloper(e.target.value)} />
    </form>
    <br/>
    <div className="renderPrograms">
    <table id="allTable">
    <thead>
        <tr>
            <th>№</th>
            <th>Program Name</th>
            <th>Program Desc</th>
            <th>Program Link</th>
            <th>Category Name</th>
            <th>Developer Name</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {filteredPrograms.map(program=>(
            <tr key={program.id_prog}>
                <td>{program.id_prog}</td>
                <td>{program.programName}</td>
                <td>{program.programDesc}</td>
                <td><a href={"https://"+program.programLink}>{program.programLink}</a></td>
                <td>{program.categoryName}</td>
                <td>{program.developerName}</td>
                <td><a href="" onClick={(e)=>{
                    e.preventDefault();
                    fetch("http://localhost:8080/program/delete/" + program.id_prog,{
                        method: 'DELETE',
                        headers:{'Content-Type':'application/json'}
                    })
                }}>Delete</a><br/><a href="#form" onClick={()=>{
                    setIsPut(true);
                    setIdProg(program.id_prog);
                    setProgName(program.programName);
                    setProgDesc(program.programDesc);
                    setProgLink(program.programLink);
                    setCatName(program.categoryName)
                    setDevName(program.developerName);
                }}>Put</a></td>
            </tr>
        ))}
    </tbody>
</table>
    </div>
    </div>
    
  );
}
