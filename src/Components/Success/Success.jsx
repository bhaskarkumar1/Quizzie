import success from "./Success.module.css";
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let Success = ({linkvalue,type,setSuccess}) => {
    let notify = () => toast.success('Notification Message',{
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
      });


      let handleClose=()=>{
        setSuccess(false)
      }
  return (
    <>
      <div className={success.container}>
        <div className={success.dummy}>
          <div className={success.cross}>
            <div>
              <IoClose className={success.close}
              onClick={handleClose}
              />
            </div>
          </div>

          <div className={success.heading}>
            <p className={success.txt}>Congrats your {type} is Published!</p>
          </div>

          <div className={success.link}>
            <input type="text" readOnly  value={linkvalue}/>
          </div>

          <div className={success.btn}>
            <button onClick={notify} className={success.share}>Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
