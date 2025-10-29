import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, Upload, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react';
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

  const createResume = async (e) => {
    e.preventDefault(); 
    setShowCreateResume(false); 
    navigate(`/app/builder/${id}`); 
  }

  const uploadResume = async (e) => {
    e.preventDefault(); 
    setShowUploadResume(false); 
    navigate(`/app/builder/${id}`); 
  }

  const editTitle = async (event) => {
    event.preventDefault(); 

  }

  const deleteResume = async (resumeId) => {
    const confirm = window.confirm("Are you sure want to delete this resume?"); 

    if (confirm) {
      setAllResumes(prev => prev.filter(resume => resume._id !== resumeId)); 
    }
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
          <button onClick={() => setShowCreateResume(true)} className="">
            <Upload className='' />
            <p className="">Upload Existing</p>
          </button>
        </div>

        <hr className="" />

        <div className="">
          {allResumes.map((resume, index) => {
            return (
              <button key={index} onClick={() => navigate(`/app/builder/${resume._id}`)} className=''>
                <FilePenLineIcon className='' />
                <p className="">{resume.title}</p>
                <p className="">
                  Updated On {new Date(resume.updatedAt).toLocaleDateString()}
                </p>
                <div onClick={e => e.stopPropagation()} className="">
                  <TrashIcon onClick={() => deleteResume(resume._id)} className='' />
                  <PencilIcon onClick={() => {setEditResumeId(resume._id); setTittle(resume.title)}} className='' />
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
                <input onChange={(e) => setTittle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='' required />

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

        {
          showUploadResume && (
            <form onSubmit={uploadResume} onClick={() => setShowUploadResume(false)} className=''>
              <div onClick={e => e.stopPropagation()} className="">
                <h2 className="">
                  Upload a Resume 
                </h2>
                <input onChange={(e) => setTittle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='' required />
                <div className="">
                  <label htmlFor="resume-input" className=''>
                    Select Resume File
                    <div className="">
                      {resume ? (
                        <p className=''>{resume.name}</p>
                      ) : (
                        <>
                          <UploadCloudIcon className='' />
                          <p>Upload Resume</p>
                        </>
                      )}
                    </div>
                  </label>
                  <input type="file" id='resume-input' accept='.pdf' hidden onChange={(e) => setResume(e.target.files[0])} />
                </div>
                <button className="">
                  Upload Resume
                </button>
                <XIcon 
                  className='' 
                  onClick={() => {
                    setShowUploadResume(false); 
                    setTittle(''); 
                  }} 
                />
              </div>
            </form>
          )
        }

        {
          editResumeId && (
            <form onSubmit={editTitle} onClick={() => setEditResumeId('')} className=''>
              <div onClick={e => e.stopPropagation()} className="">
                <h2 className="">
                  Edit Resume Title
                </h2>
                <input onChange={(e) => setTittle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='' required />
                <button className="">
                  Create Resume
                </button>
                <XIcon 
                  className='' 
                  onClick={() => {
                    setEditResumeId(''); 
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
