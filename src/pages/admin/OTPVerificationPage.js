import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { LightPurpleButton } from "../../components/buttonStyles";
import { verifyOTP, resendOTP } from '../../redux/userRelated/userHandle';
import Popup from '../../components/Popup';

const OTPVerificationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, currentUser, response, error, currentRole } = useSelector(state => state.user);

    const [otp, setOtp] = useState('');
    const [showVerifyButton, setShowVerifyButton] = useState(true);
    const [otpError, setOtpError] = useState(false);
    const [timer, setTimer] = useState(100);
    const [loader, setLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer(prevTimer => 
                {
                    if (prevTimer > 0) {
                        return prevTimer - 1;
                    } else {
                        setShowVerifyButton(false);
                        return 0;
                    }
                });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const handleVerify = () => {
        if (otp.trim() === '') {
            setOtpError('OTP cannot be empty');
            return;
        }
        setOtpError('');
        setLoader(true);
        dispatch(verifyOTP({ email: currentUser.email, role: 'Admin', otp }));
    };

    useEffect(() => {
        if (status === 'success' && response != null && response.otpVerified == true) {
            navigate('/Admin/dashboard');
        } else if(status === 'success' && response != null && response.otpSent) {
            setTimer(99);
            setShowVerifyButton(true);
            setLoader(false);
        }else if (status === 'failed') {
            setMessage(response)
            setShowPopup(true)
            setLoader(false)
        }
        else if (status === 'error') {
            console.log(error)
            setLoader(false)
        }
    }, [status, currentUser, currentRole, navigate, error, response]);

    const handleResend = () => {
        setLoader(true);
        setShowVerifyButton(false);
        dispatch(resendOTP({ email: currentUser.email, role: 'Admin' }));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                OTP Verification
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                Please enter the 4-digit OTP sent to your email.
            </Typography>
            <TextField
                variant="outlined"
                label="OTP"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                inputProps={{ maxLength: 4 }}
                error={!!otpError}
                helperText={otpError}
                sx={{ mb: 2 }}
            />
            {showVerifyButton ? (
                <LightPurpleButton
                    variant="contained"
                    color="primary"
                    onClick={handleVerify}
                    disabled={loader}
                    sx={{ mb: 2 }}
                >
                    {loader ? <CircularProgress size={24} color="inherit" /> : "Verify"}
                </LightPurpleButton>
            ) : (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleResend}
                    disabled={loader}
                >
                    {loader ? <CircularProgress size={24} color="inherit" /> : "Resend OTP"}
                </Button>
            )}
            <Typography variant="body2" sx={{ mb: 2 }}>
                {timer > 0 ? `Resend OTP in ${timer} seconds` : "Didn't receive the OTP?"}
            </Typography>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </Box>
    );
};

export default OTPVerificationPage;