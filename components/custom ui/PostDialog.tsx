
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import ProfilePhoto from "../shared/ProfilePhoto"
import { currentUser } from "@clerk/nextjs/server"

const DialogDemo = async ({ setOpen, open, src }: { setOpen: any, open: boolean, src: string }) => {
    const User = await currentUser()
    return (
        <Dialog open={open}>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent onInteractOutside={() => setOpen(false)} className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        <ProfilePhoto src={src} />
                        <div>
                            <h1>
                                {User ? `${User?.firstName} ${User?.lastName}` : 'smile plz'}
                            </h1>
                            <p className="text-xs">Post to anyone</p>
                        </div>
                    </DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export default DialogDemo