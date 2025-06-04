import noProjectImg from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img 
                src={noProjectImg} 
                alt='Empty Task List' 
                className="w-16 h-16 object-contain mx-auto" 
            />
            <p className='text-xl font-bold text-stone-500 my-4'>
                No Project Selected
            </p>
            <p className='text-stone-400 mb-4'>
                Please select a project or get started with a new one
            </p>
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    );
}