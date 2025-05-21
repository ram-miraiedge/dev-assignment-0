import React from "react";
import { CiCamera } from "react-icons/ci";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { IoApps } from "react-icons/io5";
const App = () => {
  return (
    <div className="container">
      <div className="links">
        <a href="">Gmail</a>
        <a href="">Images</a>
        <a href="" className="apps-icon"><IoApps/>
        <span className="tooltip">Google apps</span>
        </a>
        
        <a href="" className="user-img"><img src="https://lh3.googleusercontent.com/fife/ALs6j_EAWe7-IovXhleIrErDAEf6OQS4aSgP5gVj5CWiQvFK9OROmBM9fG8mkQh4YClPJFm1uLCn_QVpFVjnK_WZyd3dlmlai2EcDSZjysPTiwtbg4AbBiB_hCXo1e60gFVkCkwno6eini2GFGFsTpecbrRLnv6E9u4h0_JVpBTh8E0wYeoSd3eetHrECEWmu-H54sidXhPmXhzA6nqxwqiqyZAp5Azo4vbiXV5_4zAGuK3ZHpRqlgRFgYCpBU_Y9Sqftsb4plZpORqxQYRATu5EcGFlbh3UvEh37DmDobTbMIo8OB3M4wjhBu5r8IQfXXLu7OIrcBztMRRnI6z09mJMfnIvNHGSpjfqRyBKwV9S8Xq7Cd-Klt6DA3pmoc6f7MsnFCKRgHqL4pymRfVlYj6IpbhAdZM1zz_jAoIAZVIpYYwMKvdmQ0PGCP2gnxD4re_AGnhF2fSBXjQJgS30lQJKjgZzhaGQ0uxOK1LADJckqZ0fnjerUVvfgwarPhw-I2x_50zMwA32P8buU6vlVoEpuoz0WaLT2YL5dphbHfEqelUL9XE0JKgYoVxNpnWS7RtHqH6dFbxAsD1XJhPPio-Og3JpKhtW87vxIlYOmFTPgredCoheE51KbUF9Ep_kxbibpj8EQF_U7IVC_VYNwFarPvZEuDzEpDcDI6R5pgajSYrro78eliMH6Dt_oOeF2y4qtZknvsBbU6lGUBF73xv7OOs4aDS4VIZJj2k30RTy_Q3Qi_jOVRk6aYmjbZWuLU5BZ11aN0QN_PHr1UZ6Aq0kOaIFlNQxkJCI4pG8IH0f8XSXiH4vOZOCh041Q91rP3nYCrGUwRfde_0aVDmqLfmGagjySOw2prqWcEEk3NQqvKO7sEBQE3KEZYKS8OHdpcSg6vxypjUzTY2ck7E4WiUTNpjyoqCuPUFMf52-GR8ZgNtVD_-oBC2UbCx-OOKHI59U8XWpKZ05d9190jqc1R7D_GFlrO2C3UA4niIW7iJXu7opqmtuhGAoKhKHfjz0dn4BkmkN4mCwt9YQHbk0W0KQiHasrY87W6cPwBDWv2H3uCAhw6s554-u0VlTSWgZQ84xqxcFJ3o_EjPlQl_Z42ax0fAnqNyI8ap6r4ZcBhITW9E-IA4-MLgUAUSoWDHuPAsJHgZ3qdCGA08ImJ6iyyEBhh91mImO80fGrFh2r17qnGL9J2AOCPm_pkrLKvexTycJNTXXwmFi337oqCObKV4JYR3-omZO-qFcgI2JxvYQrLgxdt-sjV628Eeg0mDe8mCkuqaW_q4LM3xDbScTwBZEnNwKZADY9d9yrtdn9mt1zcqx1dbH6Jz-X0Dsb9fpbRXUf35iuY-8EjdOhQefIzg_WtjzoROVqTwBeArNw0lxDUlAVK-kWCVPmYkqolFRA1ZWHCve=s64-c" alt="" />
        <span className="tooltip-ac">
          <strong>Google Account</strong>
          Ram hirve <br />
          ram.hirve@miraiedge.com
        </span>
        </a>
      </div>
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google Logo"
        className="logo"
      />
      <div className="search-box">
        <FaSearch className="icon"/>
        <input type="text" placeholder="Search Google or Type a URL" className="search-field" />
        <FaMicrophone className="icon"/>
        <CiCamera className="icon"/>
      </div>
    </div>
  );
}

export default App;
