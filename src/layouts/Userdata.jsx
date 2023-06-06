import {db} from "../Firebase-config"
function Userdata() {

  const [name, setName] = useState("");
  const [sn, setSN] = useState("");
  const [studentInp, setStudentInp] = useState("")
  const [college, setCollege] = useState("")
  const [program, setProgram] = useState("")
  const [programs, setPrograms] = useState([])
  const [open, setOpen] = useState(false);
    
  const cetPrograms = [
    "Bachelor of Science in Chemical Engineering - BSCHE",
    "Bachelor of Science in Civil Engineering - BSCE",
    "Bachelor of Science in Computer Engineering - BS CpE",
    "Bachelor of Science in Computer Science - BSCS",
    "Bachelor of Science in Electrical Engineering - BSEE",
    "Bachelor of Science in Electronics Engineering - BS ECE",
    "Bachelor of Science in Information Technology - BSIT",
    "Bachelor of Science in Manufacturing Engineering - BSMFGE",
    "Bachelor of Science in Mechanical Engineering - BSME"
  ]

  const cptPrograms = [
    "Bachelor of Science in Physical Therapy",
  ]

  const caupPrograms = [
    "Bachelor of Science in Architecture - BS Arch"
  ]

  const eduPrograms = [
    "Bachelor of Elementary Education (Generalist) (BEEd)",
    "Bachelor of Secondary Education major in English (BSEd-Eng)",
    "Bachelor of Secondary Education major in Filipino (BSEd-Fil)",
    "Bachelor of Secondary Education major Mathematics (BSEd-Math)",
    "Bachelor of Secondary Education major in Sciences (BSEd-Sciences)",
    "Bachelor of Secondary Education major in Social Studies (BSEd-SS)",
    "Bachelor of Physical Education (BPE)"
  ]

  const chassPrograms = [
    "Bachelor of Arts in Communication - BAC",
    "Bachelor of Arts in Communication Major in Public Relations - BAC-PR",
    "Bachelor of Arts in Public Relations - BAPR",
    "Bachelor of Science in Social Work - BS SW"
  ]

  const cosPrograms = [
    "Bachelor of Science in Biology - BS Bio",
    "Bachelor of Science in Chemistry - BS Chem",
    "Bachelor of Science in Mathematics - BS Math",
    "Bachelor of Science in Psychology - BS PSY"
  ]

  const plmbsPrograms = [
    "Bachelor of Science in Accountancy - BS ACCTG",
    "Bachelor of Science in Business Administration Major in Business Economics - BSBA BE",
    "Bachelor of Science in Business Administration Major in Financial Management - BSBA FM",
    "Bachelor of Science in Business Administration Major in Human Resource Management - BSBA HRM",
    "Bachelor of Science in Business Administration Major in Marketing Management - BSBA MM",
    "Bachelor of Science in Business Administration Major in Operations Management - BSBA OM",
    "Bachelor of Science in Entrepreneurship - BS ENTRE",
    "Bachelor of Science In Hospitality Management - BSHM",
    "Bachelor of Science in Tourism Management - BSTM"
  ]

  const confirmEnteredData = query(collection(db, "UserData"), where("email", "==", localStorage.getItem("email")))
  const snapshotQuery = async () => {
    console.log("UMI::OTILSI")
    await getDocs(confirmEnteredData).then((v) => {
      console.log("DOCS SEARCHED")
      console.log(v.size)
      if(v.size > 0){
        v.forEach((doc)=>{
          if(doc.data().is_completed == true){
            setOpen(false)
          } else {
            setOpen(true)
            console.log("2UMI::OTILSI")
          } 
        })
      } else {
        setOpen(true)
        console.log("3UMI::OTILSI")
      }
    })
  }
  snapshotQuery();

  const filterInpSN = (val) => {
    setSN(val.replace(/\D/g, ''))
  }

  const colleges = ['CET','PLMBS','CN', 'COS', 'CHASS', 'COL', 'CAUP', 'CPT', 'Educ']

  const handleClose = async (event) => {
    if(sn.length == 9) {
      setStudentInp("")
      console.log(studentInp)
    }

    if(sn.length == 9 && program.length > 0 && college.length > 0){
      setStudentInp("")
      // Add the user entered data
      await addDoc(collection(db,"UserData"), {
        college:college,
        email:localStorage.getItem("email"),
        name:localStorage.getItem("name"),
        program:program,
        student_number:sn,
        is_completed:true
      })
      setOpen(false);
    } else {
      alert("SN LENGTH\t" + sn.length)
      if(sn.length < 9) {
        setStudentInp("You have missed some digits")
        console.log(studentInp)
      } else {
        setStudentInp("")
      }
      
      return;}
  };

  useEffect(() => {
    setName(localStorage.getItem("name"));

    // When College is selected, specific programs for it will be shown in the dropdown of PROGRAMS
    switch (college) {
      case undefined:
        setPrograms([''])
        break
      case "CET":
        setPrograms(cetPrograms)
        break;
      case "CPT":
        setPrograms(["Bachelor of Science in Physical Therapy"])
        break;
      case "CHASS":
        setPrograms(chassPrograms)
        break;
      case "CAUP":
        setPrograms(caupPrograms)
        break;
      case "COS":
        setPrograms(cosPrograms)
        break;
      case "Educ":
        setPrograms(eduPrograms)
        break;
      case "PLMBS":
        setPrograms(plmbsPrograms)
        break;
      case "CN":
        setPrograms(["Bachelor of Science in Nursing"])
        break;
    } 
  }, [name, college, sn, studentInp]);

  const noRefresh = (event) => {
    event.preventDefault();
  }
  return (
   <h1>hjsgdasuid</h1>
  )
}

export default Userdata