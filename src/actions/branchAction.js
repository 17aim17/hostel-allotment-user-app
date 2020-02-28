import { database } from "../firebase/firebase";
import { SET_BRANCHES } from "./types";

// let output = [{name: "BTECH" , years : [{year: 1, gender = {"M" : "", "F" : ""} }]}]
export const setBranches = data => ({
    type: SET_BRANCHES,
    payload: data
});

export const startSetBranch = () => {
    return dispatch => {
        database
            .ref("branches")
            .once("value")
            .then(snapshot => {
                let modifiedData = {}
                snapshot.forEach(childSnapshot => {
                    modifiedData[childSnapshot.key] = { ...childSnapshot.val() }
                    dispatch(setBranches(modifiedData));
                });
            })
    }
}