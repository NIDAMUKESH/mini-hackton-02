const deleteBlog = async (uId) => {
    // Display a confirmation message
    const confirmation = await Swal.fire({
        title: 'Delete Blog',
        text: 'Are you sure you want to delete this blog?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
    });

    // If the user confirms deletion
    if (confirmation.isConfirmed) {
        try {
            if (uId) {
                // Delete the document from Firestore
                await deleteDoc(doc(db, "myBlogs", uId));
                // Remove the corresponding HTML element from the DOM
                const dPost = document.getElementById(deleteBlog);
                dPost.remove();

                // Show success message
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Blog Deleted Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });

                console.log("Deleted Successfully");
            } else {
                console.log("Show some error");
            }
        } catch (error) {
            console.log(error);
        }
    }
};
