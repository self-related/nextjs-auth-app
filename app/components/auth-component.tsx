import { signIn, signOut } from "@/auth";

export function SignIn({provider, children, ...props}: {provider?: string, children?: string} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <form
            action={async () => {
                "use server"
                await signIn(provider); // if provider undefined | empty string, redirects to page to choose a provider
            }}
        >
            <button {...props} type="submit">{children}</button>
        </form>
    );
}

export function SignOut({children, ...props}: {children: string} & React.ButtonHTMLAttributes<HTMLButtonElement>) {

    return (
        <form
            action={async () => {
                "use server"
                await signOut();
            }}
        >
            <button {...props} type="submit">{children}</button>
        </form>
    );
}