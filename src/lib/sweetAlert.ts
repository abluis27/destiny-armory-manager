import Swal from "sweetalert2";
type SweetAlertType = "info" | "error" | "success"

export const showConfirmationAlert = async (
  title: string,
  message: string
): Promise<boolean> => {
  const result = await Swal.fire({
    title,
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Confirm",
    customClass: {
      popup: 'sweet-alert'
    }
  })
  return result.isConfirmed;
};

export const showAlert = (title: string, message: string, type: SweetAlertType) => {
  if (typeof window === "undefined") return;
  Swal.fire({
    title: title,
    text: message,
    icon: type,
    customClass: {
      popup: 'sweet-alert'
    }
  });
}
