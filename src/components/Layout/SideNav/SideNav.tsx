import SideNavAnchor from "./SideNavAnchor/SideNavAnchor";

const SideNav = () => {
  return (
    <aside
      className={`fixed flex h-screen w-20 flex-col items-center justify-center gap-y-8 border-r border-gray-1/50 bg-primary-1`}
    >
      <SideNavAnchor />
      <SideNavAnchor />
      <SideNavAnchor />
      <SideNavAnchor />
    </aside>
  );
};

export default SideNav;
