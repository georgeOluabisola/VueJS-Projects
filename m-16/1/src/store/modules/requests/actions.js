export default{
    async contactCoach(context, payload){
        const newRequest = {
            userEmail: payload.email,
            message: payload.message,
        };

        const token= context.rootGetters.token;

        const response = await fetch(`https://myschoolbrod-422005-default-rtdb.firebaseio.com/requests/${payload.coachId}.json?auth=${token}`,
            {
                method: 'POST',
                body: JSON.stringify(newRequest)
            }
        );

        const responseData = await response.json();

        if(!response.ok)
        {
            const error = new Error(responseData.message || 'failed to send request');
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.coachId = responseData.coachId;


        context.commit('addRequest', newRequest);
    },
    async fetchRequests(context){
       const coachId = context.rootGetters.userId;

       const token= context.rootGetters.token;

       const response = await fetch(`https://myschoolbrod-422005-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=${token}`);

       const responseData = await response.json();


       if(!response.ok)
       {
            const error = new Error(responseData.message || 'failed to send request');
            throw error;
       }

       const requests = [];

       for(const key in responseData)
       {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            };

            requests.push(request);
       }

       context.commit('setRequests', requests);

    }
}