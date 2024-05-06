import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAuth } from "../app/authSlice";

export function RequireAuth({ children }: { children: JSX.Element }) {
    const state = useAppSelector(selectAuth);
    let location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!state.token) {
            navigate("/", { replace: true });
        }
    }, [state.token]);

    if (!state.token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
