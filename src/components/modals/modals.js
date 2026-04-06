import React, { useState } from 'react';
import './modals.css';
import heroVideo from '../../assets/home-mobile.mp4';
import { EMPTY_FORM } from '../../data/formConstants';

const Modals = ({ videoModal, setVideoModal, counselModal, setCounselModal, successModal, setSuccessModal }) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.city.trim()) e.city = 'City is required';
    return e;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setCounselModal(false);
      setSuccessModal(true);
      setForm(EMPTY_FORM);
      setSubmitted(false);
      setTimeout(() => setSuccessModal(false), 3500);
    }
  };

  const handleInput = field => e => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (submitted) setErrors(err => ({ ...err, [field]: '' }));
  };

  return (
    <>
      {videoModal && (
        <div className="modal-overlay" onClick={() => setVideoModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setVideoModal(false)}>✕</button>
            <video src={heroVideo} controls autoPlay style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        </div>
      )}

      {counselModal && (
        <div className="modal-overlay" onClick={() => setCounselModal(false)}>
          <div className="modal-box counsel-modal" onClick={e => e.stopPropagation()}>
            <div className="counsel-header">
              <h5>Registration Form</h5>
              <button className="modal-close" onClick={() => setCounselModal(false)}>✕</button>
            </div>
            <div className="counsel-body">
              {['name', 'email', 'phone', 'city'].map(field => (
                <div className="form-group" key={field}>
                  <input type={field === 'email' ? 'email' : 'text'} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} value={form[field]} onChange={handleInput(field)} className={`form-input ${submitted && errors[field] ? 'input-error' : ''}`} />
                  {submitted && errors[field] && <span className="error-text">{errors[field]}</span>}
                </div>
              ))}
              <button className="btn-submit" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}

      {successModal && (
        <div className="modal-overlay" onClick={() => setSuccessModal(false)}>
          <div className="modal-box success-modal" onClick={e => e.stopPropagation()}>
            <div className="success-icon">✓</div>
            <p className="success-msg">Your message has been successfully sent. We will contact you very soon!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;