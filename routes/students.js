const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')

const router = express.Router()

let data = [
    {id:1, name:"John Doe", age:20},
    {id:2, name:"Jane Smith", age:22},
    {id:3, name:"Sam Brown", age:19},
    {id:4, name:"Alice Johnson", age:21}
]

router.get("/",(req, res)=>{
    let paramsObj = req.query
    console.log(paramsObj);
    res.json(data)
})

router.put("/:id", (req, res)=>{
    let Putid = req.params.id
    let updateStudent = req.body
    res.json({
        success: true , 
        message: `Student id updated ${Putid}`
    })
    
    res.json({updateStudent})
    res.json(data)
})

router.delete("/:id", (req,res)=>{
    let dedletId = req.params.id
    res.json({
        success: true,
        message: `Student is deleted ${dedletId}`
    })
})
router.get("/:id",(req,res)=>{
      let id = req.params.id
      let Student = data.find(s => s.id == id)
      res.json(Student)
})
router.post("/",(req, res)=>{
    const newStudent = req.body
    let RequirdFeild = ["name", "age"]
    let ErrorArr =[]
    
    RequirdFeild.forEach((key) => {
        if(!newStudent[key]){
        ErrorArr.push(`${key} is requird`)
        }
    })

    if(ErrorArr.length > 0){
        return res.json({
            errors: ErrorArr,
            success: false,
            message: ErrorArr.join(",")
        })

    }
        res.json({
            success: true,
            message: "Student added successfully",
            data: newStudent
        })

})



module.exports = router

