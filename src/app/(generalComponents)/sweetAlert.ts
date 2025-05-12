import Swal from "sweetalert2";


// Initialize variables to store colors
let sweetAlertBgColor = "#000"
let sweetAlertTextColor = "#fff"

// I cannot use tailwind classes for the sweet alert modals
// Reason of the typeof window: getComputedStyle is browser-only, and we use these
// functions during SRR (there's no window or DOM to access)

if (typeof window !== "undefined") {
  sweetAlertBgColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-medium-dark');
  sweetAlertTextColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-off-white');
}

type SweetAlertType = "info" | "error" | "success"

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

export const showAlert = (title: string, message: string, type: SweetAlertType) => {
  if (typeof window === "undefined") return;
  Swal.fire({
    title: title,
    text: message,
    icon: type,
    color: sweetAlertTextColor,
    background: sweetAlertBgColor,
  });
}
