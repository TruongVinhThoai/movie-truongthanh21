import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userServ } from "../../services/Api";
import { setInfoUser } from "../../redux/userSlice";
import { Form, Input } from "antd";
import { https } from "../../services/Config";
import { useParams } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { infoUser } = useSelector((state) => state.userSlice);
  console.log("🚀 ~ file: Profile.js:12 ~ Profile ~ id:", id, infoUser);

  useEffect(() => {
    userServ
      .getInfoUser()
      .then((res) => {
        console.log(res);
        dispatch(setInfoUser(res.data.content));
        setUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const [user, setUser] = useState({ adminname: "", email: "" });
  console.log("🚀 ~ file: Profile.js:28 ~ Profile ~ user:", user);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  // const handleUpdate = () => {
  //   https
  //     .put(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const [form] = Form.useForm();

  return (
    <div className="container flex justify-around items-center w-full mx-auto">
      <div className="w-1/2">
        <div class="w-72">
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Required
            </label>
          </div>
        </div>
        <Form form={form} layout="vertical">
          <Form.Item label="Tài khoản">
            {/* <Input>sdfsd</Input> */}
            <Input
              name="adminname"
              placeholder="input placeholder"
              value={user.taiKhoan}
              onChange={handleInput}
            />
          </Form.Item>
          <Form.Item label="Mật khẩu">
            <Input
              name="email"
              placeholder="input placeholder"
              value={user.matKhau}
              onChange={handleInput}
            />
          </Form.Item>
          <Form.Item label="Họ tên">
            <Input
              placeholder="input placeholder"
              value={user.hoTen}
              onChange={handleInput}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              placeholder="input placeholder"
              value={user.email}
              onChange={handleInput}
            />
          </Form.Item>
          <Form.Item label="Số điện thoại">
            <Input
              placeholder="input placeholder"
              value={user.soDT}
              onChange={handleInput}
            />
          </Form.Item>
        </Form>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}
// const UpdateAdminAccount = (props) => {
//     let navigate= useNavigate()
//     const initialInputValues = {
//       adminname: '',
//       email: '',
//     }
//     const [values, setValues] = useState(initialInputValues)

//     //show admin info before updating
//     const {id} = useParams()
//     useEffect(()=>{
//      if(id){
//          getSingleAdmin(id)
//      }
//     },[id])
//     const getSingleAdmin = async (id) =>{
//         const response = await axios.get(`/admin/${id}`);
//         console.log("response", response)
//         if (response.status === 200){
//             setValues(response.data);
//         }
//     };

//       const handleInputChange = (e) => {
//         const name = e.target.name
//         const value = e.target.value
//         setValues({
//           ...values,
//           [name]: value,
//         })
//       }

//       const updateAdmin = async (e, id) =>{
//         e.preventDefault();
//           await axios.put(`/admin/${id}`, {
//           ...values
//           }
//           ).then((res) =>{
//             console.log(res)
//               if (res.data.message === 'UPDATED') {
//                   alert("admin updated")
//                   }
//             })
//     };
//     return (
//             <form method='Post'>
//              <ul>
//               <li>
//                   <label>Name</label>
//                   <input name="adminname" value={values.adminname} onChange={handleInputChange} type="text" />
//               </li>
//               <li>
//                   <label>Email</label>
//                   <input name="email" value={values.email} onChange={handleInputChange} type="email"  />
//              </li>
//               <li>
//               <li>

//                   <button className='submit-button' onClick={updateAdmin} type="submit" >
//                     Update
//                   </button> :

//               </li>
//              </ul>
//             </form>
//             </div>

//         </div>
//       </div>
//     );
// }

// export default UpdateAdminAccount;
