import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { redirect } from "next/navigation"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { userService } from './../../services/user.service';

export default async function DashboardLayout({admin,student,tutor}:{children: React.ReactNode,admin:React.ReactNode,student:React.ReactNode,tutor:React.ReactNode}) {
  const {data} = await userService.getSession();

  if (!data) redirect("/login");

  const userInfo = data.user;
  // console.log(data.user);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar user={userInfo}/>
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          {userInfo.role === "ADMIN" ? admin : userInfo.role === "STUDENT"? student:tutor}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
