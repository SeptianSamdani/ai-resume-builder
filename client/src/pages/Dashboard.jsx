import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, Upload, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets'; 
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [allResumes, setAllResumes] = useState([]); 
  const [showCreateResume, setShowCreateResume] = useState(false); 
  const [showUploadResume, setShowUploadResume] = useState(false); 
  const [title, setTittle] = useState(''); 
  const [resume, setResume] = useState(null); 
  const [editResumeId, setEditResumeId] = useState(''); 

  const navigate = useNavigate(); 

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData); 
  }; 

  const createResume = async (events) => {
    e.preventDefault(); 
    setShowCreateResume(false); 
    navigate(`/app/builder/${id}`); 
  }

  useEffect(() => {
    loadAllResumes(); 
  }, []); 

  return (
    <div>
      <div className="">
        <p className="">
          Welcome, User!
        </p>

        <div className="">
          <button onClick={() => setShowCreateResume(true)} className=''> 
            <PlusIcon className='' />
            <p>Create Resume</p>
          </button>
          <button className="">
            <Upload className='' />
            <p className="">Upload Existing</p>
          </button>
        </div>

        <hr className="" />

        <div className="">
          {allResumes.map((resume, index) => {
            return (
              <button key={index} className=''>
                <FilePenLineIcon className='' />
                <p className="">{resume.title}</p>
                <p className="">
                  Updated On {new Date(resume.updatedAt).toLocaleDateString()}
                </p>
                <div className="">
                  <TrashIcon className='' />
                  <PencilIcon className='' />
                </div>
              </button>
            )
          })}
        </div>

        {
          showCreateResume && (
            <form onSubmit={createResume} onClick={() => setShowCreateResume(false)} className=''>
              <div onClick={e => e.stopPropagation()} className="">
                <h2 className="">
                  Create a Resume
                </h2>
                <input type="text" placeholder='Enter resume title' className='' required />

                <button className="">
                  Create Resume
                </button>
                <XIcon 
                  className='' 
                  onClick={() => {
                    setShowCreateResume(false); 
                    setTittle(''); 
                  }} 
                />
              </div>
            </form>
          )
        }
      </div>
    </div>
  )
}

export default Dashboard
