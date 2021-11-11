import React from 'react';

const ManageAllOrders = () => {
     return (
          <div>
               <h2>this is manage all orders page</h2>
               <p>
               On the Manage All Orders page for the admin, the logged in admin will see the orders placed by every user. If multiple users used this website to place orders, everyone's order will be displayed here. Admin can update the status of the order. At the time of placing an order, every order will have a default status: pending. On the Manage All Orders page, an admin will be able to update the status of the pending to shipped status. This could be a simple button to update the pending status. (don't over think, this is a simple button to update the status field of an order. Use Id to find the order and set the status to approved). Also, it would be nice if you can do one additonal task here: The admin will be able to delete anyone's order here. Make sure to add a confirmation before deleting. Please note: delete is optional but recommended on this page.
               </p>
          </div>
     );
};

export default ManageAllOrders;