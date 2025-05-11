import Swal from "sweetalert2";

// I cannot use tailwind classes for the sweet alert modals
const sweetAlertBgColor = getComputedStyle(document.documentElement)
.getPropertyValue('--color-medium-dark')
const sweetAlertTextColor = getComputedStyle(document.documentElement)
.getPropertyValue('--color-off-white')

export const showConfirmationAlert = async (
  title: string,
  message: string
): Promise<boolean> => {
  const result = await Swal.fire({
    title,
    text: message,
    icon: "warning",
    color: sweetAlertTextColor,
    background: sweetAlertBgColor,
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Confirm"
  })

  return result.isConfirmed;
};


export const showSuccessAlert = (title: string) => {
    if (typeof window === "undefined") return;
    Swal.fire({
        title: title,
        icon: "success",
        color: sweetAlertTextColor,
        background: sweetAlertBgColor
    });
}

export const showInfoAlert = (title: string, message: string) => {
  if (typeof window === "undefined") return;
  Swal.fire({
    title: title,
    text: message,
    icon: "info",
    color: sweetAlertTextColor,
    background: sweetAlertBgColor,
  });
}
