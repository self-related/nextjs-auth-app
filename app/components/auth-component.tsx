import { signIn } from "@/auth";

export default function SignIn({provider, children, ...props}: {provider?: string, children?: string} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <form
            action={async () => {
                "use server"
                await signIn(provider)
            }}
        >
            <button {...props} type="submit">{children}</button>
        </form>
    );
}