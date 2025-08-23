import React, { useState } from "react";
import Axios from "axios";
import Searchbar from "../component/searchbar";
import { Link } from "react-router-dom";
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [u_email, setuemail] = useState('');
  const [u_password, setupass] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const singin = () => {
    window.location = "/Registration"
  }

  const onSubmit = () => {
    setLoading(true);
    Axios.post('http://localhost:1137/api/loginuser',
      { u_email: u_email, u_password: u_password }
    ).then((response) => {
      setLoading(false);
      if (response.data.msg) {
        alert(response.data.msg);
      }
      else {
        alert("Login Successful");
        let obj1 = { u_email: u_email, u_password: u_password, _id: response.data[0]._id, u_firstname: response.data[0].u_firstname, u_lastname: response.data.u_lastname, u_dob: response.data[0].u_dob, u_mob: response.data[0].u_mob, u_gender: response.data[0].u_gender }
        localStorage.setItem('mydata', JSON.stringify(obj1));
        window.location = "/";
      }
    }).catch((error) => {
      setLoading(false);
      alert("Login failed. Please try again.");
    });
  }

  const loginadmin = () => {
    setLoading(true);
    Axios.post('http://localhost:1137/api/loginadmin',
      { u_email: u_email, u_password: u_password }).then((responce) => {
        setLoading(false);
        if (responce.data.msg) {
          alert(responce.data.msg)
        }
        else {
          alert("Login Successful");
          let obj2 = { u_email: u_email, u_password: u_password, _id: responce.data[0]._id, u_firstname: responce.data[0].u_firstname }
          localStorage.setItem('mydata1', JSON.stringify(obj2));
          let user = JSON.parse(localStorage.getItem('mydata1'));
          window.location = "http://localhost:3001?id=" + user._id;
        }
      }).catch((error) => {
        setLoading(false);
        alert("Admin login failed. Please try again.");
      });
  }

  return (
    <>
      <Searchbar />

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #E8F5E8 0%, #FFF8E1 100%)',
        padding: '60px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container-modern">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Left Side - Welcome Section */}
            <div className="fade-in-up">
              <div style={{
                background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                borderRadius: '20px',
                padding: '60px 40px',
                color: '#FFFFFF',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  opacity: 0.5
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '150px',
                  height: '150px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  opacity: 0.5
                }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <i className="fa fa-leaf" style={{
                    fontSize: '4rem',
                    color: '#FFC107',
                    marginBottom: '24px',
                    display: 'block'
                  }}></i>
                  <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '20px',
                    lineHeight: '1.2'
                  }}>
                    Welcome Back to
                    <span style={{ color: '#FFC107', display: 'block' }}>Tech-Farm</span>
                  </h2>
                  <p style={{
                    fontSize: '1.2rem',
                    opacity: 0.9,
                    lineHeight: '1.6',
                    marginBottom: '30px'
                  }}>
                    Your gateway to modern agriculture solutions and expert farming guidance.
                  </p>

                  {/* Features */}
                  <div style={{ textAlign: 'left' }}>
                    {[
                      'Access to premium agricultural content',
                      'Connect with expert farmers',
                      'Get personalized farming advice',
                      'Track your farming progress'
                    ].map((feature, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '16px',
                        fontSize: '1rem'
                      }}>
                        <i className="fa fa-check-circle" style={{ color: '#FFC107', fontSize: '1.1rem' }}></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="slide-in-right">
              <div className="modern-form" style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '50px 40px',
                boxShadow: '0 20px 60px rgba(46, 125, 50, 0.1)',
                border: '1px solid rgba(46, 125, 50, 0.1)'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <h1 style={{
                    fontSize: '2.2rem',
                    fontWeight: '700',
                    color: '#2E7D32',
                    marginBottom: '12px'
                  }}>
                    Sign In
                  </h1>
                  <p style={{ color: '#7F8C8D', fontSize: '1.1rem' }}>
                    Enter your credentials to access your account
                  </p>
                </div>

                <Form onSubmit={handleSubmit(onSubmit)}>
                  {/* Email Field */}
                  <div className="form-group">
                    <label className="form-label" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#2C3E50',
                      fontWeight: '600'
                    }}>
                      <i className="fa fa-envelope" style={{ color: '#4CAF50' }}></i>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      onChange={(e) => setuemail(e.target.value)}
                      style={{
                        paddingLeft: '50px',
                        background: errors.email ? '#FFF5F5' : '#FFFFFF',
                        borderColor: errors.email ? '#E53E3E' : 'rgba(46, 125, 50, 0.2)'
                      }}
                    />
                    <i className="fa fa-envelope" style={{
                      position: 'absolute',
                      left: '18px',
                      top: '42px',
                      color: '#7F8C8D'
                    }}></i>
                    {errors.email && (
                      <div style={{
                        color: '#E53E3E',
                        fontSize: '0.9rem',
                        marginTop: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <i className="fa fa-exclamation-circle"></i>
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="form-group">
                    <label className="form-label" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#2C3E50',
                      fontWeight: '600'
                    }}>
                      <i className="fa fa-lock" style={{ color: '#4CAF50' }}></i>
                      Password
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        placeholder="Enter your password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                          }
                        })}
                        onChange={(e) => setupass(e.target.value)}
                        style={{
                          paddingLeft: '50px',
                          paddingRight: '50px',
                          background: errors.password ? '#FFF5F5' : '#FFFFFF',
                          borderColor: errors.password ? '#E53E3E' : 'rgba(46, 125, 50, 0.2)'
                        }}
                      />
                      <i className="fa fa-lock" style={{
                        position: 'absolute',
                        left: '18px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#7F8C8D'
                      }}></i>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: 'absolute',
                          right: '18px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'none',
                          border: 'none',
                          color: '#7F8C8D',
                          cursor: 'pointer',
                          fontSize: '1rem'
                        }}
                      >
                        <i className={`fa fa-${showPassword ? 'eye-slash' : 'eye'}`}></i>
                      </button>
                    </div>
                    {errors.password && (
                      <div style={{
                        color: '#E53E3E',
                        fontSize: '0.9rem',
                        marginTop: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <i className="fa fa-exclamation-circle"></i>
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  {/* Remember & Forgot */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px',
                    flexWrap: 'wrap',
                    gap: '16px'
                  }}>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#2C3E50',
                      cursor: 'pointer'
                    }}>
                      <input type="checkbox" style={{ margin: 0 }} />
                      Remember me
                    </label>
                    <Link to="/Forgotpassword" style={{
                      color: '#4CAF50',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.95rem'
                    }}>
                      Forgot Password?
                    </Link>
                  </div>

                  {/* Login Buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <button
                      type="submit"
                      className="btn-agriculture"
                      disabled={loading}
                      style={{
                        width: '100%',
                        padding: '16px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        opacity: loading ? 0.7 : 1
                      }}
                    >
                      {loading ? (
                        <>
                          <div className="loading-spinner" style={{ width: '20px', height: '20px' }}></div>
                          Signing In...
                        </>
                      ) : (
                        <>
                          <i className="fa fa-sign-in"></i>
                          Sign In as User
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={loginadmin}
                      className="btn-agriculture-outline"
                      disabled={loading}
                      style={{
                        width: '100%',
                        padding: '14px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        opacity: loading ? 0.7 : 1
                      }}
                    >
                      <i className="fa fa-user-shield"></i>
                      Admin Login
                    </button>
                  </div>

                  {/* Sign Up Link */}
                  <div style={{
                    textAlign: 'center',
                    marginTop: '30px',
                    padding: '20px 0',
                    borderTop: '1px solid #E8F5E8'
                  }}>
                    <p style={{ color: '#7F8C8D', marginBottom: '16px' }}>
                      Don't have an account yet?
                    </p>
                    <button
                      type="button"
                      onClick={singin}
                      style={{
                        background: 'linear-gradient(135deg, #FFC107, #FFB300)',
                        border: 'none',
                        color: '#FFFFFF',
                        padding: '12px 32px',
                        borderRadius: '50px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        margin: '0 auto'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 24px rgba(255, 193, 7, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <i className="fa fa-user-plus"></i>
                      Create New Account
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container-modern > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .modern-form {
            padding: 30px 20px !important;
          }
          
          .fade-in-up div:first-child {
            padding: 40px 30px !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          h1 {
            font-size: 1.8rem !important;
          }
        }
        
        .form-control:focus {
          border-color: #4CAF50 !important;
          box-shadow: 0 0 0 4px rgba(76, 175, 80, 0.1) !important;
        }
        
        input[type="checkbox"] {
          accent-color: #4CAF50;
        }
      `}</style>
    </>
  );
}

export default Login