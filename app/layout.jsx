import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
    title: "Quizzy",
    description: "Create and share custom made quizzes"
}

const RootLayout = ({children}) => {
  return (
    <Provider>
        <Nav />
        <main>
            {children}
        </main>
    </Provider>
  )
}

export default RootLayout;