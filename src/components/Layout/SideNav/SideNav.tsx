import SideNavAnchor from "./SideNavAnchor/SideNavAnchor";

const SideNav = () => {
  return (
    <aside
      className={`fixed flex h-screen w-20 flex-col items-center justify-center gap-y-8 border-r border-purple-3 bg-purple-2/40`}
    >
      <SideNavAnchor />
      <SideNavAnchor />
      <SideNavAnchor />
      <SideNavAnchor />
    </aside>
  );
};

export default SideNav;
