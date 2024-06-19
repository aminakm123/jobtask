def has_companion_dashboard_permission(user):
    return user.groups.filter(name='companion').exists() 


def has_mentor_dashboard_permission(user):
    return user.groups.filter(name='mentor').exists()


def has_admin_dashboard_permission(user):
    return user.groups.filter(name='admin').exists()
